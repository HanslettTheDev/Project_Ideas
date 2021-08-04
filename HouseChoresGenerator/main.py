# creating a random house chores generator
import random as r

# here dictates the program can take house chores and store in a list

chores_list = []

def create_chores_lists():
    i = 0
    while i < 30:
        chores = input("list of house chores: ")
        chores_list.append(chores)
        i += 1

create_chores_lists()

# create a class that produces the list for 3 people

class random_user_chores():
    def mavin(self):
        self = chores_list
        i = 0
        while i < 10:
            print("Mavin: " + r.choice(self))
            i += 1
    def hanslett(self):
        self = chores_list
        i = 0
        while i < 10:
            print("Hanslett: " + r.choice(self))
            i += 1
    def darrele(self):
        self = chores_list
        i = 0
        while i < 10:
            print("Darrele: " + r.choice(self))
            i += 1


random_user_chores.hanslett(chores_list)
random_user_chores.mavin(chores_list)
random_user_chores.darrele(chores_list)