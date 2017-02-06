###
# Compass
###

::Compass.configuration.sass_options = { :line_comments => false }

# Susy grids in Compass
# First: gem install compass-susy-plugin
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Haml
###

# CodeRay syntax highlighting in Haml
# First: gem install haml-coderay
# require 'haml-coderay'

# CoffeeScript filters in Haml
# First: gem install coffee-filter
# require 'coffee-filter'

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

###
# Page command
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Change the CSS directory
# set :css_dir, "alternative_css_directory"

# Change the JS directory
# set :js_dir, "alternative_js_directory"

# Change the images directory
# set :images_dir, "alternative_image_directory"

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  activate :minify_html

  # Use relative URLs
  # activate :relative_assets

  activate :asset_hash
  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

helpers do
  def link_to_unless_current(text, path)
    if "/#{request.path}" =~ /#{path}/
      text
    else
      link_to text, path
    end
  end

  def link_to(name, path, options = {})
    super name, (ENV["RACK_ENV"] == "production" && !(path =~ /^http/) ? path.gsub(".html", "") : path), options
  end

 # Columns depricated
  def vimeo(id, columns = nil)
    <<-HTML
      <div class="embed-responsive embed-responsive-16by9">
        <iframe src="http://player.vimeo.com/video/#{id}?title=0&byline=0&portrait=0" class="embed-responsive-item">
        </iframe>
      </div>
    HTML
  end
end
