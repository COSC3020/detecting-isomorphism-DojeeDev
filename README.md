# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

### Analysis

We generate all permutations of the indices which is $|V|!$ Then for each permutation we use it to move the rows and columns of one of the graphs to check against the other one. This takes $|V|^2$ time. We also generate an array of the indices the graph which is an extra separate $|V|$.

This gives us $|V| + |V|! + |V|^2 \cdot |V|!  = |V| + |V|!(1+|V|^2) \in \Theta(|V| + |V|^2 \cdot |V|!)$.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

