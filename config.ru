ENV["RACK_ENV"] ||= "development"

require "rubygems"
require "bundler"
require "yaml"

Bundler.setup(:default, ENV["RACK_ENV"].to_sym)

@root      = File.join(File.expand_path(File.dirname(__FILE__)), 'build')
@redirects = YAML.load_file 'redirects.yml'

if ENV["RACK_ENV"] == "development"
  require "middleman/rack"

  run Middleman.server
else
  run Proc.new { |env|
    path = Rack::Utils.unescape(env['PATH_INFO'])

    if path =~ /\.html$/i
      [301, { 'Location' => path.gsub(".html", '') }, []]
    elsif @redirects.key?(path)
      [301, { 'Location' => @redirects[path] }, []]
    else
      path += 'index' if path =~ /\/$/
      path += ".html" unless path =~ /\./

      page      = @root + path.downcase
      extension = page.match(/(\.[a-z]+)$/)[0]

      if File.exists?(page)
        [200, { 'Content-Type' => Rack::Mime.mime_type(extension) }, [File.read(page)]]
      else
        [404, { 'Content-Type' => 'text/plain' }, ['Page not found']]
      end
    end
  }
end
