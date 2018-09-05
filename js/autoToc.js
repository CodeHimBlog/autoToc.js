/*  Plugin: AutoToc.js
 *   Author: Asif Mughal
 *   URL: https://www.codehim.com
 *   License: MIT License
 *   Copyright (c) 2018 - Asif Mughal
 *
 *   USEAGE: This lite weight plug-in automatically generate "Table of Contents" of the article based on the h2 headings available in article tag. 
 * 
 * HOW TO USE: Just call the autoToc() in your jQuery code, use the HTML selector, where TOC to be inserted. For example, if you want to append table of contents in the beginning of your article, the statement will be:
      $("article").autoToc();

* Similarly, you can insert this autoToc anywhere, i.e in the sidebar , or your desired location. 
*/

(function ( $ ) {
    $.fn.autoToc = function() {
        return this.each(function() {
       var autoToc = document.createElement("div"); //Create div for the table
       var heading = document.createElement("h4"); //heading of TOC
       var headingText = $(heading).html("Table of Contents"); //Text for heading
       var tocOL = document.createElement("ol"); //Create ordered list for contents
    $(autoToc).append(headingText); //Heading entered into the TOC div
       var totalNum = $("article h2").length; //Find the total number of h2 available in article
    i = 0; do{
       var tocH = 'h2:'+'eq('+i+')'; 
       var h2 = $(tocH).attr('id',  i).text(); //Get the text of the second level heading
       var tocLi = document.createElement("li"); //Create list for headings text
       var tocLink = document.createElement("a"); //Build anchor link
       var tocHref = '#'+i;
       var LinkReady = $(tocLink).html(h2).attr('href', tocHref); 
       var ListReady =  $(tocLi).html(LinkReady); //Assign links to list
       var OLReady = $(tocOL).append(ListReady); //Insert lists into ol
    $(autoToc).append(OLReady).insertBefore(this);
       i++; 
          }while (  i < totalNum)
$(autoToc).addClass("auto-toc");

//Smooth Scroll between sections
   $("a").on('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    } 
  });
});
     };
 
}( jQuery ));

/*   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */
