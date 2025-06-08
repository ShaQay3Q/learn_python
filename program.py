age = 39
kid_age = 0

if age < 40:
    condition = "young"
    print ("You're ", condition, " babe!")

if age == 40:
    condition = "peaking"
    print ("You're ", condition, " babe!")
    kid_age = 5

if age > 40:
    condition = "great"
    print ("You are ", condition, " babe!")

print ("Your kid is ", kid_age, " old.")

print ("___________________")

for int in range(1,10):
    print (int, int*int)

for thing in [4, "456", "cat"]:
    print (thing, thing*2)