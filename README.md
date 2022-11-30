# Tuesday Katas
## Nesting structure comparison

In the :beetroots-squad: language of your choice TDD a function/method to return true/True when its 2nd argument is an array that has the same nesting structures and same corresponding length of nested arrays as the 1st argument.
For example:
#### should return True
same_structure_as([ 1, 1, 1 ], [ 2, 2, 2 ] )
same_structure_as([ 1, [ 1, 1 ] ], [ 2, [ 2, 2 ] ] )

#### should return False 
same_structure_as([ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ] )
same_structure_as([ 1, [ 1, 1 ] ], [ [ 2 ], 2 ] )

#### should return True
same_structure_as([ [ [ ], [ ] ] ], [ [ [ ], [ ] ] ] )

#### should return False
same_structure_as([ [ [ ], [ ] ] ], [ [ 1, 1 ] ] )