# This is the root of our app
@root = File.join(File.expand_path(File.dirname(__FILE__)), 'build')

run Proc.new { |env|
  # Extract the requested path from the request
  path = Rack::Utils.unescape(env['PATH_INFO'])

  index_file = @root + (path == '/' ? '/index.html' : "#{path}.html")

  if File.exists?(index_file)
    # Return the index
    [200, {'Content-Type' => 'text/html'}, [File.read(index_file)]]
  else
    # Pass the request to the directory app
    Rack::Directory.new(@root).call(env)
  end
}