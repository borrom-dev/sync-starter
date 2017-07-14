class V1::ArticlesController < Api::RestController
  def index
    render :json=> {greeting: 'Hello, World'}
  end
end
