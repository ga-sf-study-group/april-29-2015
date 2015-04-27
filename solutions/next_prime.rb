def next_prime_greater_than(n)
  prime_candidate = n + 1
  while !is_prime?(prime_candidate)
    prime_candidate += 1
  end
  return prime_candidate
end


def is_prime?(n)
  (2..Math.sqrt(n)).to_a.each do |divisor|
    if n % divisor == 0
      return false
    end
  end
  return true
end

start = 1
print "We start with 2 as the first prime number\n"
response = "Y"
while response.downcase[0] == "y"
  start = next_prime_greater_than(start)
  puts start
  print "Do you want the next prime? (Y/N)\n"
  response = gets.strip
end