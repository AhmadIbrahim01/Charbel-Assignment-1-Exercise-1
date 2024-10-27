rows = int(input("For rows: "))

stars = 1  
for i in range(rows, 0, -1):
    print(" "*i + "*" * stars + " "*i)
    stars += 2
    
stars -= 2
for i in range(2, rows + 3):
    stars -= 2
    print(" "*i + "*" * stars + " "*i)
