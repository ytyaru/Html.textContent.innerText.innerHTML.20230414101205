window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    // 設定・HTML表示
    document.getElementById('tc-nl').textContent = 'あ\nい'
    document.getElementById('tc-br').textContent = 'う<br>え'
    document.getElementById('tc-b').textContent = '<b>おか</b>'
    document.getElementById('it-nl').innerText = 'あ\nい'
    document.getElementById('it-br').innerText = 'う<br>え'
    document.getElementById('it-b').innerText = '<b>おか</b>'
    document.getElementById('ih-nl').innerHTML = 'あ\nい'
    document.getElementById('ih-br').innerHTML = 'う<br>え'
    document.getElementById('ih-b').innerHTML = '<b>おか</b>'
    // 取得・テキスト表示
    document.getElementById('g-tc-nl').textContent = document.getElementById('tc-nl').textContent
    document.getElementById('g-tc-br').textContent = document.getElementById('tc-br').textContent
    document.getElementById('g-tc-b').textContent = document.getElementById('tc-b').textContent
    document.getElementById('g-it-nl').innerText = document.getElementById('it-nl').innerText
    document.getElementById('g-it-br').innerText = document.getElementById('it-br').innerText
    document.getElementById('g-it-b').innerText = document.getElementById('it-b').innerText
    document.getElementById('g-ih-nl').innerHTML = document.getElementById('ih-nl').innerHTML
    document.getElementById('g-ih-br').innerHTML = document.getElementById('ih-br').innerHTML
    document.getElementById('g-ih-b').innerHTML = document.getElementById('ih-b').innerHTML

    // 設定してから別の属性で取得したときのHTML表示
    document.getElementById('tc-it-nl').innerHTML = document.getElementById('tc-nl').innerText
    document.getElementById('tc-it-br').innerHTML = document.getElementById('tc-br').innerText
    document.getElementById('tc-it-b').innerHTML = document.getElementById('tc-b').innerText
    document.getElementById('tc-ih-nl').innerHTML = document.getElementById('tc-nl').innerHTML
    document.getElementById('tc-ih-br').innerHTML = document.getElementById('tc-br').innerHTML
    document.getElementById('tc-ih-b').innerHTML = document.getElementById('tc-b').innerHTML

    document.getElementById('it-tc-nl').innerHTML = document.getElementById('it-nl').textContent
    document.getElementById('it-tc-br').innerHTML = document.getElementById('it-br').textContent
    document.getElementById('it-tc-b').innerHTML = document.getElementById('it-b').textContent
    document.getElementById('it-ih-nl').innerHTML = document.getElementById('it-nl').innerHTML
    document.getElementById('it-ih-br').innerHTML = document.getElementById('it-br').innerHTML
    document.getElementById('it-ih-b').innerHTML = document.getElementById('it-b').innerHTML

    document.getElementById('ih-it-nl').innerHTML = document.getElementById('ih-nl').innerText
    document.getElementById('ih-it-br').innerHTML = document.getElementById('ih-br').innerText
    document.getElementById('ih-it-b').innerHTML = document.getElementById('ih-b').innerText
    document.getElementById('ih-tc-nl').innerHTML = document.getElementById('ih-nl').textContent
    document.getElementById('ih-tc-br').innerHTML = document.getElementById('ih-br').textContent
    document.getElementById('ih-tc-b').innerHTML = document.getElementById('ih-b').textContent

    // 設定してから別の属性で取得したときのテキスト表示
    document.getElementById('g-tc-it-nl').textContent = document.getElementById('tc-nl').innerText
    document.getElementById('g-tc-it-br').textContent = document.getElementById('tc-br').innerText
    document.getElementById('g-tc-it-b').textContent = document.getElementById('tc-b').innerText
    document.getElementById('g-tc-ih-nl').textContent = document.getElementById('tc-nl').innerHTML
    document.getElementById('g-tc-ih-br').textContent = document.getElementById('tc-br').innerHTML
    document.getElementById('g-tc-ih-b').textContent = document.getElementById('tc-b').innerHTML

    document.getElementById('g-it-tc-nl').textContent = document.getElementById('it-nl').textContent
    document.getElementById('g-it-tc-br').textContent = document.getElementById('it-br').textContent
    document.getElementById('g-it-tc-b').textContent = document.getElementById('it-b').textContent
    document.getElementById('g-it-ih-nl').textContent = document.getElementById('it-nl').innerHTML
    document.getElementById('g-it-ih-br').textContent = document.getElementById('it-br').innerHTML
    document.getElementById('g-it-ih-b').textContent = document.getElementById('it-b').innerHTML

    document.getElementById('g-ih-it-nl').textContent = document.getElementById('ih-nl').innerText
    document.getElementById('g-ih-it-br').textContent = document.getElementById('ih-br').innerText
    document.getElementById('g-ih-it-b').textContent = document.getElementById('ih-b').innerText
    document.getElementById('g-ih-tc-nl').textContent = document.getElementById('ih-nl').textContent
    document.getElementById('g-ih-tc-br').textContent = document.getElementById('ih-br').textContent
    document.getElementById('g-ih-tc-b').textContent = document.getElementById('ih-b').textContent

    // 指定したidの要素の指定メソッドで取得したテキストに指定したテキストが含まれるか
    function has(id, method, expected) { return -1 < document.getElementById(id)[method].indexOf(expected) }
    // 取得したテキストに改行コードが含まれるか
    function hasNewline(id, method) { return has(id, method, '\n') }
    function hasBreak(id, method) { return has(id, method, '<br>') }
    function hasBold(id, method) { return has(id, method, '<b>') }
//    function hasNewline(id, method) { -1 < document.getElementById(id)[method].indexOf('\n') }
    
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

