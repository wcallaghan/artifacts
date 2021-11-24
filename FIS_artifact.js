document.getElementById("FIS_div").innerHTML = 
  "<h1>Practical Application of Fast Inverse Square Root Method<h1>
  <p>It does not take a lot of experimenting with computers to come to the conclusion that they process data very quickly. Unforunately not all data transformations are fast.
    Notably, division is a slow process when compared to multiplication and addition; many common programming languages also hold a math library which contains useful methods
    Java and many others have a method to solve for square root, math.sqrt(a), which is helpful but regrettably slow. When presented with 1/√x coding this in Java is simple
    yet slow; this artifact will examine ways to speed up this calculation making it much more efficient to compile.</p>
<h2>Why should we care?</h2>
<p>The difference between the processes are only milliseconds, so why would it make sense to take extra effort to save fractions of a second? The answer lies in scope;
  in a vacummn the difference is miniscule, but when writing a function or method that will take thousands or tens of thousands of parameters these small differences add up very
  quickly.</p>";
