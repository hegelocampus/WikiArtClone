json.key_format! camelize: :lower

@selectors.each do |table_name, values|
  json.set! table_name do
    values.each do |subSel|
      json.set! subSel.id do
        json.id subSel.id
        json.name subSel.name
      end
    end
  end
end

