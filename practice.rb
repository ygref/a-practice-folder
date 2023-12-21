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

# arrayofhashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
# new_array = []
# index = 0

# while index < arrayofhashes.length
#   item = arrayofhashes[index]
#   if item[:price] > 5
#     new_array << item
#   end
# index = index + 1
# end
# p new_array

# Start with an array of numbers and create a new array with only the even numbers.
# For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

# numbers = [2, 4, 5, 1, 8, 9, 7]
# even_numbers = []
# index = 0

# while index < numbers.length
# if numbers[index] % 2 == 0
#   even_numbers << numbers[index]
# end
# index = index + 1
# end
# p even_numbers

# def add_my_numbers
#   var x = 9
#    var x + 1
#   end

#   p add_my_numbers

# Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

# If the age is 12 years old or younger, the ticket price is $5.
# If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
# If the customer is 60 years old or older, the ticket price is $7.

# customer_age = 13
# movie_time = 19

# if customer_age <= 12
#   ticket_price = 5
# elsif customer_age >= 13 && customer_age <= 59
#   if movie_time > 18
#   ticket_price = 7
#   else ticket_price = 10
#   end
# elsif customer_age == 60
#   ticket_price = 10
# end

# puts ticket_price
original_array = [1, 2, 3, 4, 5]
# reversed_array = reverse_array(original_array)
# reversed_array should be [5, 4, 3, 2, 1]

# def reverse(array)
#   reversed_numbers = []
#   array.each do |number|
#     reversed_numbers << number
#   end
#   reversed_numbers
# end

# puts reverse(original_array)

# def reverse(array)
#   reversed_numbers = []
#   array.reverse_each do |number|
#     reversed_numbers << number
#   end
#   reversed_numbers
# end

# puts reverse(original_array)

# Write a method that takes in a number and returns the number times two. Then run the method and print the result.

# def times(number)
#   return number * 2
# end

# p times(2)

# Write a method that takes in a string and returns the string with all capital letters. Then run the method and print the result.

# def caps(string)
#   string.upcase
# end

# p caps("small")

# Write a method that takes in two numbers and returns the first number subtracted by the second. Then run the method and print the result.

# def subtract(first, second)
#   first - second
# end

# p subtract(12, 1)

# Write a method that takes in a number and returns the number times itself. Then run the method and print the result.

# def squared(number)
#   number * number
# end

# p squared(4)

# Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

# def first(string)
#   string[0]
# end

# p first("WHAT?")

# def last(string)
#   string[-1]
# end

# p last("WHAT?")

# Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

# def three_string(string1, string2, string3)
#   return string1 + " " + string2 + " " + string3
# end

# puts three_string("hi", "hello", "world")

# Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

# def stringify(number)
#   return number.to_s
# end

# puts stringify(10)

# puts stringify(10).class

# Write a method that takes in a string and returns the string repeated 5 times. Then run the method and print the result.

# def times_five(string)
#   return string * 5
# end

# puts times_five("Five!")
# pp times_five("Five!")

# Write a method that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the method and print the result.

# def average(number1, number2, number3)
#   return (number1 + number2 + number3) / 3.0
# end

# puts average(100, 50, 75)

class Song
  def initialize(name, artist, duration)
    @name = name
    @artist = artist
    @duration = duration
  end
end

song = Song.new("What's my age again?", "Blink 182", "4:00")

pp song
