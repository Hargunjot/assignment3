
add = function() 
{  result =  parseInt(jQuery('#operand_1').html()) +  parseInt(jQuery('#operand_2').html());    
    jQuery('#result').html(result);
}
sub = function() 
{  result =  parseInt(jQuery('#operand_1').html()) -  parseInt(jQuery('#operand_2').html());    
    jQuery('#result').html(result);
}
mul = function() 
{  result =  parseInt(jQuery('#operand_1').html()) *  parseInt(jQuery('#operand_2').html());    
    jQuery('#result').html(result);
}
div = function() 
{  result =  parseInt(jQuery('#operand_1').html()) /  parseInt(jQuery('#operand_2').html());    
    jQuery('#result').html(result);
}
clear=function()
{
    result= "";
    jQuery('#result').html(" ");
}

setup = function() {    
    jQuery('#add_button').click(add)
    jQuery('#add_button').mouseover(add)
    jQuery('#sub_button').click(sub)
    jQuery('#sub_button').mouseover(sub)
    jQuery('#mul_button').click(mul)
    jQuery('#mul_button').mouseover(mul)
    jQuery('#div_button').click(div)
    jQuery('#div_button').mouseover(div)
    jQuery('#clear_button').click(clear)
}
jQuery(document).ready(setup)