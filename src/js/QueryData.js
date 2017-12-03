

module.exports = {
  // Load Mock Product Data Into localStorage
  init: function () {
    console.log("QueryData.init");
    localStorage.clear();
    localStorage.setItem('data', JSON.stringify([
      {
        id: 'Query One',
        title: 'Adtech Conquers the World',
        articles: [
            'article1',
            'article2',
            'article3'
        ],     
        url:"http://mpointinc.com/"
      },
      {
        id: 'Query Two',
        title: 'Blah Blah Blah',
        articles: [
            'article11',
            'article12',
            'article13'
        ],     
        url:"http://mpointinc.com/"
      },
      {
        id: 'Query Three',
        title: 'PlaceHolder 3',
        articles: [
            'articleA',
            'articleB',
            'articleC'
        ],     
        url:"http://mpointinc.com/"
      }
    ]));
  } 
}