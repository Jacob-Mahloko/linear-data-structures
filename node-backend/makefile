CXX=g++ -g -std=c++11 -Wall -pedantic -Werror=vla
all: tests

tests: tests.o tests.cpp linkedlist.cpp linkedlist.h
	$(CXX) -o tests tests.o linkedlist.cpp
tests.o: tests.cpp
	$(CXX) -c -o tests.o tests.cpp
# # 
# CC=g++
# CFLAGS=-Wall -g
# TESTS=tests.cpp linkedlist.cpp
# OUT=test_output

# # Rule to compile the tests
# all:
# 	$(CC) $(CFLAGS) -o $(OUT) $(TESTS)

# # Run the tests
# run_tests: all
# 	./$(OUT)

# # Clean up the compiled files
# clean:
# 	rm -f $(OUT)
