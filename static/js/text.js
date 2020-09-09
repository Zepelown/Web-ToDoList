var text = [
    "제자가 계속 제자로만 남는다면 <br> 스승에 대한 고약한 보답이다. <br> <span>프레드리히 니체</span>" ,
    "궁금증을 풀고 싶다면 <br> 어느 주제에 대한 것이든 호기심이 발동하는 <br> 그 순간을 잡아라. 그 순간을 흘려보낸다면 그 욕구는 다시 돌아오지 않을 수 있고 당신은 무지한 채로 남게 될 것이다. <br> <span>윌리엄 워트</span>",
    "많은 공부와 지식이 <br> 곧 지혜로 연결되는 것은 아니다. <br> <span>헤라클레이토스</span>",
    "배우기만 하고 생각하지 않으면 얻는 것이 없고,<br> 생각만 하고 배우지 않으면 위태롭다. <br> <span>공자</span>",
    "아이들에게 조언하는 가장 좋은 방법은<br> 아이들이 무엇을 원하는지 알아내어<br> 그것을 하라고 조언하는 것임을 알게 되었다. <br> <span>헤리 트루먼</span>",
    "그럼 제가 해지는 것을 보게 해달라고 한 것은요?<br> 한번 한 질문은 절대로 그냥 넘어가는 법이 없는 어린왕자가 다시 물었다. <br> <span>생텍쥐페리</span>",
]

function randomHandler () {
    var random = Math.floor(Math.random() * 6);
    var randomText = text[random];
    document.querySelector(".text-field").innerHTML = randomText;
}


