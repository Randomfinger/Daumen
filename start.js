/** check the state of the thump.
@param inp: Input value 
@return: positive statement if inp is true and negative if not.
*/
var checkThumb = function(inp, lang){
  if(inp && lang=='en' || !lang){return 'Thump is up!'}
  else if(inp && lang='de'){return 'Daumen ist oben'}
  else{return 'down. :('}
}
