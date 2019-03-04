# Timewith Buttons library

## Types:
- ButtonGreen
- ButtonBlue
- ButtonOrange
- ButtonRed

## Utility:
- ButtonsRow

## Install

```bash
$ npm install @time-with/buttons
or
$ yarn add @time-with/buttons
```

## Usage

    import { 
      ButtonsRow, 
      ButtonBlue, 
      ButtonGreen, 
    } from './shared/buttons'

    <ButtonsRow>
      <ButtonBlue onClick={this.handleSeeExampleProfile}>
        <p>See an example profile</p>
        <FontAwesome icon='eye' />
      </ButtonBlue>
      <ButtonGreen onClick={this.handleSubmit}>
        <p>Next</p>
        <FontAwesome icon='arrow-right' />
      </ButtonGreen>
    </ButtonsRow>


## Options (Buttons)

#### disabled
Type: `Boolean` Default: `false`


## Options (ButtonsRow)

#### align (single option: 'right')
Type: `String` Default: `left`


## License

MIT
