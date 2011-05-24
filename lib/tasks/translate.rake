require 'json'

namespace :translate do
  
  desc "yml to json"
  task :to_json do |t|
    path = File.join(File.dirname(__FILE__), "/../../config/locales")
    public_path = File.join(File.dirname(__FILE__), "/../../public/javascripts/locales")
    FileUtils.mkdir_p(public_path)
    
    Dir.new(path).entries.each do |file|
      if File.file?("#{path}/#{file}") && (File.extname("#{path}/#{file}") == '.yml')
        File.new("#{public_path}/#{file.gsub('yml', 'js')}", "w").write("var __locale = " + YAML.load_file("#{path}/#{file}")[file.split('.').first].to_json.to_s)
      end
    end
  end
end

