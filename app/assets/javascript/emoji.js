// emojis are from Github all emojis here: https://github.com/Heark/rgss3/blob/master/emoji.md
function e_filter(text) {
  var emoticons = {
    ':-)' : '1f60a.png',
    ':)'  : '1f60a.png',
    ':D'  : '1f604.png',
    ':('  : '1f61f.png',
    ":P"  : '1f61d.png',
    ';P'  : '1f61c.png'
  }, url = "emojis/", patterns = [],
     metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

  for (var i in emoticons) {
    if (emoticons.hasOwnProperty(i)){ 
      patterns.push('('+i.replace(metachars, "\\$&")+')');
    }
  }

  return text.replace(new RegExp(patterns.join('|'),'g'), function (match) {
    return typeof emoticons[match] != 'undefined' ?
           '<img src="'+url+emoticons[match]+'" height=\"20\" width=\"20\"/>' :
           match;
  });
}
