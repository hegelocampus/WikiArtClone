json.key_format! camelize: :lower

json.set! @selector.model_name.name do
  json.set! @selector.id do
    json.id @selector.id
    json.name @selector.name
  end
end

