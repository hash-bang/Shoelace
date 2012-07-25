Shoelace
========
A small addon library for Bootstrap.

This library provides some extra utility styles and Javascript fixups.


Installation
------------
Run the following in a Linux shell:

	# cd to/where/your/project/is
	mkdir lib
	git submodule add https://github.com/hash-bang/Shoelace.git lib/shoelace

Now add the following to your main HTML page somewhere after the Bootstrap section:

	<!-- Shoelace -->
	<link href="/lib/shoelace/shoelace.css" rel="stylesheet" type="text/css"/>
	<script src="/lib/shoelace/shoelace.js"></script>

... and you're done!


Features
========

Style fixes
-----------
A collection of various useful CSS classes in the bootstrap style.


<table>
	<tr>
		<th>Class</th>
		<th>Description</th>
		<th>Example</th>
	</tr>
	<tr>
		<th>pull-center</th>
		<td>Center elements dynamicly</td>
		<td>
<pre>
&lt;div class="pull-center"&gt;This element is centered within the parent&lt;/div&gt;
</pre>
		</td>
	</tr>
	<tr>
		<th>pull-vcenter</th>
		<td>Center elements vertically within a parent</td>
		<td>
<pre>
&lt;div class="pull-vcenter"&gt;
	This element is vertically centered
	within a block parent
&lt;/div&gt;
</pre>
		</td>
	</tr>
	<tr>
		<th>pad, pad-small, pad-large, pad-huge</th>
		<td>Change the padding of an element</td>
		<td>
<pre>
&lt;div class="pad"&gt;This element has some padding</div>
&lt;div class="pad-huge"&gt;This element has a huge amount of padding&lt;/div&gt;
</pre>
		</td>
	</tr>
	<tr>
		<th>font-small, font-medium, font-large, font-huge</th>
		<td>Change the font size within an element</td>
		<td>
<pre>
&lt;div class="font-medium"&gt;This element has a normal sized font&lt;/div&gt;
&lt;div class="font-huge"&gt;This element has a huge font&lt;/div&gt;
</pre>
		</td>
	</tr>
</table>


Tooltips / data-tip
-------------------
Apply a tooltip to an item without having to call $(selector).tooltip()
For various weird reasons 'data-tooltip' cant be used so 'data-tip' will have to suffice.
	
	<a href="#" data-tip="Tooltip to display on hover"></a>
	
Additional parameters:
* data-tip-placement - Set the tooltip position


TODO list & ideas
=================
* Confirm buttons (possibly <a data-confirm="Are you sure"...>) will popup a small tooltip with Yes/No buttons when clicking a link - useful for delete buttons and other things that require two-factor checks
* Auto focus first elements in modal dialog boxes (possibly <input data-focus="1">)
