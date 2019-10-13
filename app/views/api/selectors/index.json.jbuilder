json.key_format! camelize: :lower
json.set! @selectors[0].model_name.name do
  @selectors.each do |selector|
    json.set! selector.id, selector.name
  end
end

