 function getCookie(b_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(b_name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + b_name.length+1
               c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return decodeURI(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

function setCookie(c_name,c_value,expires)
{
    var exdate = new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    c_value=getElementById("login_name").value
    document.cookie = c_name + "=" + encodeURI(c_value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

function checkCookie()
{
    username=getCookie('username')
    if (username!=null && username!="")
        {this.value = username}
}