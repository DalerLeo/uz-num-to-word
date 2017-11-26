
$(document).ready(function() {
  var NUMBER2TEXT = {
    ones: ['', 'bir', 'ikki', 'uch', 'to\'rt', 'besh', 'olti', 'yetti', 'sakkiz', 'to\'qqiz'],
    tens: ['', 'o\'n', 'yigirma', 'o\'ttiz', 'qirt', 'ellik', 'oltmush', 'yetmush', 'sakson', 'to\'qson'],
    sep: ['', ' ming ', ' million ', ' milliard ', ' trillion ', ' kvadrillion ', ' kvintillion ']
};

(function( ones, tens, sep ) {

    var input = document.getElementById( 'input' ),
        output = document.getElementById( 'output' );
    
    input.onkeyup = function() {
        var val = this.value,
            arr = [],
            str = '',
            i = 0;
        
        if ( val.length === 0 ) {
            output.textContent = 'Please type a number into the text-box.';
            return;  
        }
        
        val = parseInt( val, 10 );
        if ( isNaN( val ) ) {
            output.textContent = 'Invalid input.';
            return;   
        }
        
        while ( val ) {
            arr.push( val % 1000 );
            val = parseInt( val / 1000, 10 );  
            console.warn('VAL: ',val)
            console.warn('ARR: ',arr) 
        }
        
        while ( arr.length ) {
            str = (function( a ) {
              console.warn('A: ', a)
                var x = Math.floor( a / 100 ),
                    y = Math.floor( a / 10 ) % 10,
                    z = a % 10;
                console.warn('X: ', x)
                console.warn('Y: ', y)
                console.warn('Z: ', z)

                
                return ( x > 0 ? ones[x] + ' yuz ' : '' ) +                 
                       ( y >= 1 ? tens[y] + ' ' + ones[z] : ones[z] ); 
            })( arr.shift() ) + sep[i++] + str;                     
        }
        
        output.textContent = str;        
    };
    
})( NUMBER2TEXT.ones, NUMBER2TEXT.tens, NUMBER2TEXT.sep );
});
