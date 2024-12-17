import React, { useEffect, useState } from 'react';

import { Button, Dropdown } from 'react-bootstrap';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import PropTypes from 'prop-types';

export default function SortBy({ sortFields, orderByFields, icon, sorting, onApplySorting, onResetSorting }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(sorting || '');

  useEffect(() => {
    // Sincronizza il valore del selectedItem con il genitore
    setSelectedItem(sorting || '');
  }, [sorting]);

  const handleToggle = isOpen => {
    setIsOpen(isOpen);
  };

  const handleItemSelect = ({ order, sort }) => {
    setSelectedItem({ sort: sort, order: order });
  };

  const handleReset = () => {
    setIsOpen(false);
    onResetSorting();
  };

  const handleApply = () => {
    setIsOpen(false);
    onApplySorting(sorting);
  };

  return (
    <Dropdown onToggle={handleToggle} show={isOpen} autoClose="outside">
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <div
          style={{
            alignItems: 'center',
            borderRadius: '0.375rem',
            border: '0.0625rem solid var(--tag-border)',
            backgroundColor: 'var(--tag-bg)',
            display: 'flex',
            justifyContent: 'flex-start',
            color: 'var(--tag-text)',
            padding: '0px 6px',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--font-size-md)',
            width: 'fit-content',
            height: '2rem',
          }}
        >
          {icon}
          <span
            style={{
              margin: '0px 0.5rem',
            }}
          ></span>
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu
        as={CustomMenu}
        key={selectedItem}
        style={{
          width: 'fit-content',
          boxShadow: '0 0 4px 0 rgba(var(--background-inverted-rgb), 0.25)',
        }}
      >
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          <>
            <div>
              <strong>Sort By Fields</strong>
              {sortFields.map((field, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleItemSelect({ sort: field, order: sorting.order })}
                  active={selectedItem === field}
                >
                  {field}
                </Dropdown.Item>
              ))}
            </div>
            <Dropdown.Divider />
            <div>
              <strong>Order By Fields</strong>
              {orderByFields.map((field, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleItemSelect({ order: field, sort: sorting.sort })}
                  active={selectedItem === field}
                >
                  {field}
                </Dropdown.Item>
              ))}
            </div>
          </>
        </div>

        <Dropdown.Divider style={{ margin: '0' }} />
        {/* Buttons outside the scrollable area */}
        <div className="d-flex justify-content-between ms-2 me-3 mt-2">
          <Button variant="link" onClick={handleReset} size="sm">
            Reset
          </Button>
          <Button variant="primary" onClick={handleApply} size="sm" id="dropdown-button">
            OK
          </Button>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <button
    type="button"
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
  >
    {children}
  </button>
));

CustomToggle.displayName = 'CustomToggle';

CustomToggle.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const CustomMenu = React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => (
  <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
    {children}
  </div>
));

CustomMenu.displayName = 'CustomMenu';

CustomMenu.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  'aria-labelledby': PropTypes.string,
};

SortBy.propTypes = {
  sortFields: PropTypes.array.isRequired,
  onApplySorting: PropTypes.func.isRequired,
  orderByFields: PropTypes.array.isRequired,
  sorting: PropTypes.object.isRequired,
  icon: PropTypes.node.isRequired,
  onResetSorting: PropTypes.func.isRequired,
};
