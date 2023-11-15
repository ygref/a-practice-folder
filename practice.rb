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

# Start with an array of numbers and create a new array with only the numbers less than 20.
# For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

# array = [2, 32, 80, 18, 12, 3] 
# new_array = []
# index = 0 

# while index < array.length
# number = array[index]
# if number < 20
#   new_array << number
# end
# index = index + 1
# end

# pp new_array
# array = [1, 2, 3, 4, 5]
# index = 0
# new_array =[]
# while index < array.length
# new_array << array[index]

# index += 1
# end
# pp new_array.reverse

# Start with an array of strings and create a new array with only the strings that start with the letter "w".
# For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

# array = ["winner", "winner", "chicken", "dinner"]
# index = 0
# new_array = []

# while index < array.length
#   if array[index][0] == "w"
#     new_array << array[index]

#   end
# index += 1
# end
# pp new_array


# Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
# For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

arrayofhashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
new_array = []
index = 0 
