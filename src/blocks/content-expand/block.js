/**
 * BLOCK: Content Expand
 */

import './style.scss';
import './editor.scss';

( function( blocks, components, i18n, element ) {
  var __ = wp.i18n.__;
  var el = element.createElement;
  var registerBlockType = wp.blocks.registerBlockType;
  var RichText = wp.blockEditor.RichText;
  var BlockControls = wp.blockEditor.BlockControls;
  var AlignmentToolbar = wp.blockEditor.AlignmentToolbar;

  registerBlockType( 'alps-gutenberg-blocks/content-expand', {
    title: __('ALPS Content Expand', 'alps-gutenberg-blocks'),
    icon: 'arrow-down-alt',
    description: __('Content block that expands the content on click.', 'alps-gutenberg-blocks'),
    category: 'common',
    html: false,

    attributes: {
      kicker: {
        type: 'array',
        source: 'children',
        selector: 'em',
      },
      title: {
        type: 'array',
        source: 'children',
        selector: 'font',
      },
      body: {
        type: 'array',
        source: 'children',
        selector: 'p',
      },
      alignment: {
        type: 'string',
      },
    },

    edit: function( props ) {
      var attributes = props.attributes;

      function onChangeAlignment( newAlignment ) {
        props.setAttributes( { alignment: newAlignment === undefined ? 'left' : newAlignment } );
      }

      return [
        el( BlockControls, { key: 'controls' },
          el( AlignmentToolbar, {
            value: attributes.alignment,
            onChange: onChangeAlignment,
          } )
        ),
        el( 'div', { className: props.className },
          el( RichText, {
            tagName: 'em',
            placeholder: __('Kicker', 'alps-gutenberg-blocks'),
            className: 'o-kicker',
            keepPlaceholderOnFocus: true,
            value: attributes.kicker,
            onChange: function( newKicker ) {
              props.setAttributes( { kicker: newKicker } );
            }
          } ),
          el( RichText, {
            tagName: 'strong',
            className: 'o-heading--l',
            placeholder: __('Title', 'alps-gutenberg-blocks'),
            keepPlaceholderOnFocus: true,
            value: attributes.title,
            onChange: function( newTitle ) {
              props.setAttributes( { title: newTitle } );
            }
          } ),
          el( RichText, {
            tagName: 'p',
            className: 'o-paragraph',
            placeholder: __('Body', 'alps-gutenberg-blocks'),
            keepPlaceholderOnFocus: true,
            style: { textAlign: attributes.alignment },
            value: attributes.body,
            onChange: function( newBody ) {
              props.setAttributes( { body: newBody } );
            }
          } )
        )
      ];
    },

    save: function( props ) {
      var attributes = props.attributes;

      return (
        <div>
          <div className="js-this c-block c-block c-block__expand u-background-color--gray--light u-border--left u-theme--border-color--darker--left can-be--dark-dark">
            <div className="c-block__header">
              <div className="c-block__title u-padding">
                <h2 className="u-font--primary--s u-theme--color--darker">
                  <span className="u-theme--color--base"><em>{ attributes.kicker }</em> </span><font>{ attributes.title }</font>
                </h2>
                <div className="c-block__toggle">
                  <button className="js-toggle o-button o-button--outline o-button--toggle o-button--small" data-toggled="this" data-prefix="this"><span className="u-icon u-icon--xs u-path-fill--white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><title>o-icon__plus</title><path d="M10,4H6V0H4V4H0V6H4v4H6V6h4Z" fill="#9b9b9b"/></svg></span></button>
                </div>
              </div>
            </div>
            <div className="c-block__body u-padding u-padding--zero--top u-spacing">
              <p style={ { textAlign: attributes.alignment } }>{ attributes.body }</p>
            </div>
          </div>
        </div>
      );
    }

  });

} )(
  window.wp.blocks,
  window.wp.components,
  window.wp.i18n,
  window.wp.element,
);
