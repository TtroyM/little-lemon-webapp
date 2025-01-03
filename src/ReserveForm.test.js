import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReserveForm from './ReserveForm';

test('should render reserve form with default values ', () => {
  render(<ReserveForm />);

  const indoorRadio = screen.getByLabelText(/indoor/i);
  const outdoorRadio = screen.getByLabelText(/outdoor/i);
  const dateInput = screen.getByLabelText(/date/i);
  const timeInput = screen.getByLabelText(/time/i);
  const guestsInput = screen.getByLabelText(/guests/i);

  expect(indoorRadio).toBeInTheDocument();
  expect(outdoorRadio).toBeInTheDocument();
  expect(dateInput).toHaveValue('');
  expect(timeInput).toHaveValue('');
  expect(guestsInput).toHaveValue('2');
});

test('should update the indoor/outdoor selection', async () => {
  render(<ReserveForm />);

  const indoorRadio = screen.getByLabelText(/indoor/i);
  const outdoorRadio = screen.getByLabelText(/outdoor/i);

  expect(indoorRadio).toBeChecked();
  expect(outdoorRadio).not.toBeChecked();

  userEvent.click(outdoorRadio);

  await screen.findByLabelText(/outdoor/i);

  expect(indoorRadio).not.toBeChecked();
  expect(outdoorRadio).toBeChecked();
});
