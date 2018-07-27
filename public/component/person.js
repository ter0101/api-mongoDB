var Person = React.createClass({
  getInitialState: function() {
    return {
      p: []
    };
  },
  render: function() {
    var p = this.state.p;
    p = p.map(function(p, index) {
      return (
        <li key="{index}">
          <span className={p.obj.avliable} />
          <span>{p.odj.name}</span>
          <span>{p.odj.age}</span>
          <span>{Math.floor(p.dis / 1000)} km</span>
        </li>
      );
    });
    return (
      <div id="p-contain">
        <form id="search" onSubmit={this.handleSubmit}>
          <label>Enter lat</label>
          <input type="text" ref="lat" required />
          <label>Enter Ing</label>
          <input type="text" ref="ing" required />
          <input type="submit" value="submit" />
        </form>
        <ul />
      </div>
    );
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var ing = this.ref.ing.value;
    var lat = this.ref.lat.value;

    fetch("/api/ninja?ing=" + ing + "&lat=" + lat)
      .then(function(data) {
        return data.json();
      })
      .then(json => {
        this.setState({
          p: json
        });
      });
  }
});

ReactDom.render(<Person />, document.getElementById("pserson"));
