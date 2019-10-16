json.key_format! camelize: :lower

selectors = [
    @art_movements,
    @fields,
    @nationalities,
    @schools
  ]

selectors.each do |selector|
  json.set! selector.model_name.name do
    selector.each do |subSel|
      json.set! subSel.id do
        json.id subSel.id
        json.name subSel.name
      end
    end
  end
end

