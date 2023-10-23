# while true
#   puts "Enter a word"
# input = gets.chomp 
# if input == "stop" 
#   break
# end
# end

# number = 0

# while number <= 100
#   puts number
# number += 5
# end

# phrase = "Around the world"
# index = 0
# while index <= 144
#   puts index.to_s + " " + phrase
# index += 1
# end

# array = ["hello", "there",]

# array.push("General", "Kenobi")
# puts array
# pp array

# sentence = ""
# index = 0

# while index < array.length
#   sentence << array[index]+" "
# index += 1
# end

# p sentence

array = [1, 2, 3, 4, 5]
index = 0
new_array =[]
while index < array.length
new_array << array[index]

index += 1
end
pp new_array.reverse