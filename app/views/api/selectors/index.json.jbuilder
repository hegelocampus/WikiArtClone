json.key_format! camelize: :lower
json.set! @selectors[0].model_name.name do
  @selectors.each do |selector|
    json.set! selector.id do
      json.partial! '/api/selectors/selector.json.jbuilder', selector: selector
    end
  end
end

