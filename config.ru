require 'yaml'

HTML = '.html'.freeze

@root      = File.join(File.expand_path(File.dirname(__FILE__)), 'build')
@redirects = YAML.load_file 'redirects.yml'

run Proc.new { |env|
  path = Rack::Utils.unescape(env['PATH_INFO'])

  if path =~ /#{HTML}$/i
    [301, { 'Location' => path.gsub(HTML, '') }, []]
  elsif @redirects.key?(path)
    [301, { 'Location' => @redirects[path] }, []]
  else
    path += 'index' if path =~ /\/$/
    path += HTML unless path =~ /\./

    page      = @root + path.downcase
    extension = page.match(/(\.[a-z]+)$/)[0]

    if File.exists?(page)
      [200, { 'Content-Type' => Rack::Mime.mime_type(extension) }, [File.read(page)]]
    else
      [404, { 'Content-Type' => 'text/plain' }, ['Page not found']]
    end
  end
}
