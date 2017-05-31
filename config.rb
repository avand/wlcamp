::Compass.configuration.sass_options = { :line_comments => false }

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :minify_html
  activate :asset_hash
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

  def vimeo(id)
    <<-HTML
      <div class="video embed-responsive embed-responsive-16by9">
        <iframe src="http://player.vimeo.com/video/#{id}?title=0&byline=0&portrait=0" class="embed-responsive-item">
        </iframe>
      </div>
    HTML
  end

  def carousel(name, *images)
    id = "carousel-#{name.gsub(' ', '-')}"
    slides = ""
    indicators = ""

    images.each_with_index do |image, i|
      slides += <<-HTML
        <div class="item #{'active' if i.zero?}">
          <img src="#{image}" alt="#{name} picture #{i + 1}">
        </div>
      HTML

      indicators += <<-HTML
        <li data-target="##{id}" data-slide-to="#{i}" #{'class="active"' if i.zero?}></li>
      HTML
    end

    <<-HTML
      <div id="#{id}" class="carousel slide" data-ride="carousel" data-interval="false">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          #{indicators}
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          #{slides}
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="##{id}" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="##{id}" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    HTML
  end
end
