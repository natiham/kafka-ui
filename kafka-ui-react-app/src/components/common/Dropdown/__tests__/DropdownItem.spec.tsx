import React from 'react';
import DropdownItem from 'components/common/Dropdown/DropdownItem';
import { render } from 'lib/testHelpers';
import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';
import { screen } from '@testing-library/react';

const onClick = jest.fn();

describe('DropdownItem', () => {
  it('matches snapshot', () => {
    const wrapper = create(
      <DropdownItem onClick={jest.fn()}>Item 1</DropdownItem>
    );
    expect(onClick).not.toHaveBeenCalled();
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('handles Click', () => {
    render(<DropdownItem onClick={onClick}>Item 1</DropdownItem>);

    const dropDown = screen.getByText('Item 1');

    userEvent.click(dropDown);
    expect(onClick).toHaveBeenCalled();
  });
});
