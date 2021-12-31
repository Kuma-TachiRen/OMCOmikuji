var typelist = {
  b: '4b',
  n: '無印',
  e: '4e',
  v: '有志',
  o: '旧'
}

$(function () {
  $('#loading').hide();
  $('#run').on('click', run);
  $('#result').css('font-size', '30px');
});

function run() {
  $('#loading').show();
  $.getJSON("./data/problem.json", function () { })
    .done(function (prob_data) {
      var prob = prob_data[Math.floor(Math.random() * prob_data.length)];
      $('#result').attr('href', `https://onlinemathcontest.com/contests/${prob.contestid}/tasks/${prob.problemid}`);
      $('#result').text(prob.name);
      $('#result-detail').text(`(${typelist[prob.type]},${prob.point}点)`);

      var result = `OMCおみくじ結果\n\n>>> ${prob.name} (${typelist[prob.type]},${prob.point}点) <<<\nhttps://onlinemathcontest.com/contests/${prob.contestid}/tasks/${prob.problemid}\n\n`;
      $('iframe').remove();
      $('.body-contents').append(`<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false" data-text="${decodeURI(result)}" data-hashtags="OMCおみくじ" data-url="https://kuma-tachiren.github.io/OMCOmikuji/">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`);
    });
  $('#loading').hide();
}
