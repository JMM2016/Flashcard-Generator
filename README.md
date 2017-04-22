<!DOCTYPE html>
<html lang='en'>
<!-- # Flashcard-Generator -->

<html>
<body>

<div class='file-content wiki'>
<h1>&#x000A;<a id="cloze-constructors" class="anchor" href="#cloze-constructors" aria-hidden="true"></a>Cloze Constructors</h1>&#x000A;&#x000A;<h3>&#x000A;<a id="overview" class="anchor" href="#overview" aria-hidden="true"></a>Overview</h3>&#x000A;&#x000A;<p>The backend for a basic flashcard application.</p>&#x000A;&#x000A;<p>The backend will essentially constitute an API that allows users to create two types of flashcards.</p>&#x000A;&#x000A;<ol>&#x000A;<li><p><strong>Basic</strong> flashcards, which have a front (<em>"Who was the first president of the United States?"</em>), and a back (<em>"George Washington"</em>).</p></li>&#x000A;<li><p><strong>Cloze-Deleted</strong> flashcards, which present <em>partial</em> text (<em>"... was the first president of the United States."</em>), and the full text when the user requests it (<em>"George Washington was the first president of the United States."</em>)</p></li>&#x000A;</ol>&#x000A;&#x000A;<h4>&#x000A;<a id="cloze-deletions" class="anchor" href="#cloze-deletions" aria-hidden="true"></a>Cloze Deletions</h4>&#x000A;&#x000A;<p>A <strong>cloze deletion</strong> is simply a sentence that has had some of its text removed. For example, given the sentence:</p>&#x000A;&#x000A;<p><em>"George Washington was the first president of the United States."</em></p>&#x000A;&#x000A;<p>...We can create a "cloze deletion" by removing the words <em>"George Washington"</em>:</p>&#x000A;&#x000A;<p><em>"... was the first president of the United States."</em></p>&#x000A;&#x000A;<p>This is useful for building flash card applications that forces users to remember the important part of a sentence, and is <a href="https://en.wikipedia.org/wiki/Cloze_test" rel="nofollow noreferrer" target="_blank">a common device in educational applications</a>.</p>&#x000A;&#x000A;<p>A flash card built this way has three parts:</p>&#x000A;&#x000A;<ol>&#x000A;<li><p>The <strong>full text</strong>. This is the entire sentence users need to remember:  <em>"George Washington was the first president of the United States."</em></p></li>&#x000A;<li><p>The <strong>cloze deletion</strong>. This is the text we've chosen to remove: <em>"George Washington"</em>.</p></li>&#x000A;<li><p>The <strong>partial text</strong>. This is what we get if we remove the <strong>cloze deletion</strong> from the <strong>full text</strong>: <em>"... was the first president of the United States.</em></p></li>&#x000A;</ol>&#x000A;&#x000A;<h3>&#x000A;&#x000A;<h2>&#x000A;<a id="instructions" class="anchor" href="#instructions" aria-hidden="true"></a>Instructions</h2>&#x000A;&#x000A;<ul>&#x000A;<li><p>Create a new GitHub repository, named <code>Flashcard-Generator</code> or something similar. Clone this to your local drive.</p></li>&#x000A;<li>&#x000A;<p>Create a new file named <code>BasicCard.js</code>:</p>&#x000A;&#x000A;<ul>&#x000A;<li>This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:&#x000A;<code>module.exports = BasicCard;</code>&#x000A;</li>&#x000A;<li>The constructor should accept two arguments: <code>front</code> and <code>back</code>.</li>&#x000A;<li>The constructed object should have a <code>front</code> property that contains the text on the front of the card.</li>&#x000A;<li>The constructed object should have a <code>back</code> property that contains the text on the back of the card.</li>&#x000A;</ul>&#x000A;</li>&#x000A;<li>&#x000A;<p>Create a new file named <code>ClozeCard.js</code>:</p>&#x000A;&#x000A;<ul>&#x000A;<li>This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:&#x000A;<code>module.exports = ClozeCard;</code>&#x000A;</li>&#x000A;<li>The constructor should accept two arguments: <code>text</code> and <code>cloze</code>.</li>&#x000A;<li>The constructed object should have a <code>cloze</code> property that contains <em>only</em> the cloze-deleted portion of the text.</li>&#x000A;<li>The constructed object should have a <code>partial</code> property that contains <em>only</em> the partial text.</li>&#x000A;<li>The constructed object should have a <code>fullText</code> property that contains <em>only</em> the full text.</li>&#x000A;<li>The constructor should throw or log an error when the cloze deletion does <em>not</em> appear in the input text.</li>&#x000A;<li>Use prototypes to attach these methods, wherever possible.</li>&#x000A;</ul>&#x000A;</li>&#x000A;</ul>&#x000A;&#x000A;<h3>&#x000A;<a id="examples" class="anchor" href="#examples" aria-hidden="true"></a>Examples</h3>&#x000A;&#x000A;<p>Your constructors should work as follows.</p>&#x000A;&#x000A;<pre class="code highlight js-syntax-highlight plaintext"><code>var firstPresident = new BasicCard(&#x000A;    "Who was the first president of the United States?", "George Washington");&#x000A;&#x000A;// "Who was the first president of the United States?"&#x000A;console.log(firstPresident.front); &#x000A;&#x000A;// "George Washington"&#x000A;console.log(firstPresident.back); &#x000A;&#x000A;var firstPresidentCloze = new ClozeCard(&#x000A;    "George Washington was the first president of the United States.", "George Washington");&#x000A;&#x000A;// "George Washington"&#x000A;console.log(firstPresidentCloze.cloze); &#x000A;&#x000A;// " ... was the first president of the United States.&#x000A;console.log(firstPresidentCloze.partial); "&#x000A;&#x000A;// "George Washington was the first president of the United States.&#x000A;console.log(firstPresidentCloze.fullText): "&#x000A;&#x000A;// Should throw or log an error because "oops" doesn't appear in "This doesn't work"&#x000A;var brokenCloze = new ClozeCard("This doesn't work", "oops");</code></pre>&#x000A;&#x000A;&#x000A;<hr>&#x000A;&#x000A;
</div>

</body>
</html>
