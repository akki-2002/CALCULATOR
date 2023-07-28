function no_backspaces(event)
            {
                backspace = 8;
                if (event.keyCode == backspace) event.preventDefault();
            }