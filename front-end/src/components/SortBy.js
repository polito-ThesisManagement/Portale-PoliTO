import React, { useEffect, useState } from 'react';

import { Button, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaAngleDown, FaAngleUp, FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';

import PropTypes from 'prop-types';

import TextToggle from './TextToggle';

export default function SortBy({ sortFields, sorting, onApplySorting, onResetSorting }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(sorting || '');
  const [selectedSort, setSelectedSort] = useState(sorting.field || '');
  const [selectedOrder, setSelectedOrder] = useState(sorting.order || '');

  const { t } = useTranslation();

  useEffect(() => {
    // Sincronizza il valore del selectedItem con il genitore
    setSelectedItem(sorting || '');
  }, [sorting]);

  const handleToggle = isOpen => {
    setIsOpen(isOpen);
  };

  const handleReset = () => {
    setIsOpen(false);
    onResetSorting();
  };

  const handleApply = ({ field: selectedSort, order: selectedOrder }) => {
    setIsOpen(false);
    const newSorting = { field: selectedSort, order: selectedOrder };
    console.log(newSorting);
    setSelectedItem(newSorting);
    onApplySorting(newSorting, sorting);
  };

  const handleChangeOrderExternal = order => {
    setSelectedOrder(order);
    if (selectedSort) {
      handleApply({ field: selectedSort, order });
    } else {
      setSelectedSort(sorting.field);
      handleApply({ field: sorting.field, order });
    }
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
            padding: '10px 6px',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--font-size-md)',
            width: 'fit-content',
            height: '2rem',
          }}
        >
          <span
            style={{
              margin: '0px 0.5rem',
            }}
          >
            {selectedOrder === 'ASC' ? (
              <FaSortAmountUpAlt
                onClick={e => {
                  e.stopPropagation();
                  handleChangeOrderExternal('DESC');
                }}
              />
            ) : (
              <FaSortAmountDownAlt
                onClick={e => {
                  e.stopPropagation();
                  handleChangeOrderExternal('ASC');
                }}
              />
            )}{' '}
            {t('carriera.proposte_di_tesi.order_by')}
            {': '}
            {selectedItem.field
              ? t(`carriera.proposte_di_tesi.${selectedItem.field}`)
              : t(`carriera.proposte_di_tesi.${sorting.field}`)}
          </span>
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu
        as={CustomMenu}
        key={selectedItem}
        style={{
          width: 'fit-content',
          boxShadow: '0 0 4px 0 rgba(var(--background-inverted-rgb), 0.25)',
          paddingLeft: '0.5rem',
        }}
      >
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          <>
            <div>
              <TextToggle field={selectedOrder} handleFieldChange={setSelectedOrder} />
            </div>
            <Dropdown.Divider />
            <div>
              {sortFields.map((field, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => setSelectedSort(field)}
                  active={selectedSort ? selectedSort === field : sorting.field === field}
                >
                  {t(`carriera.proposte_di_tesi.${field}`)}
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
          <Button
            variant="secondary"
            onClick={() => handleApply({ field: selectedSort, order: selectedOrder })}
            size="sm"
            id="dropdown-button"
          >
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
  sorting: PropTypes.object.isRequired,
  onResetSorting: PropTypes.func.isRequired,
};
