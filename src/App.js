import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColor';
import { generatePalette } from './colorHelpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './Page';

const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

class App extends Component {

  state = {
    palettes: savedPalettes || seedColors
  }

  findPalette = id => {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }

  deletePalette = id => {
    this.setState(
      st => ({ 
        palettes: st.palettes.filter(palette => palette.id !== id) 
      }), this.syncLocalStorage
    )
  }

  savePalette = newPalette => {
    this.setState({
      palettes: [...this.state.palettes, newPalette]
    }, this.syncLocalStorage);
  }
  
  // save to local storage
  syncLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }

  render() {
    return (
      <Route render={({ location }) =>(
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='page' timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/palette/new"
                render={(routeProps) => (
                  <Page>
                    <NewPaletteForm
                      savePalette={this.savePalette}
                      palettes={this.state.palettes}
                      {...routeProps}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/"
                render={(routeProps) => (
                  <Page>
                    <PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette}{...routeProps} />
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/:id"
                render={(routeProps) => (
                  <Page>
                    <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={(routeProps) => (
                  <Page>
                    <SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />
                  </Page>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>
    );
  }
}

export default App;
