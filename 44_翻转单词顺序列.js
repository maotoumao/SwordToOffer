function ReverseSentence(str)
{
    if(str === null){
        return null;
    }
    return str.split(' ').reverse().join(' ');
}