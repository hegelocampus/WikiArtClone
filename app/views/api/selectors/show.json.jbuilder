json.key_format! camelize: :lower
json.set! @selector.model_name.name do
  json.set! @selector.id, @selector.name
end

