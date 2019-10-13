json.key_format! camelize: :lower
json.set! @selector.model_name.name do
  json.set! @selector.id do
    json.partial! '/api/selectors/selector.json.jbuilder', selector: @selector
  end
end

