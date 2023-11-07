import React, { useState, Fragment, useEffect } from 'react'
import { motion } from 'framer-motion'
import BasicTabs from '../components/ExpenseTabs'
import { BsPlusCircle, BsCash, BsBank2 } from 'react-icons/bs'
import { RxCrossCircled } from 'react-icons/rx'
import { PiCurrencyBtc } from 'react-icons/pi'
// Rerenders onload  Not a child of App.jsx
// used material ui here 
import * as Yup from 'yup'
import { useFormik, } from 'formik'
import { Switch, Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const inputSchema = Yup.object().shape({
    amount: Yup.string()
        .matches(/^[0-9]+$/, 'Expense amount must contain only numbers')
        .required('Required'),
    Other: Yup.string().min(4, 'Too short').max('50', "Too long"),
});



const ExpenseTracker = () => {

    // its best time to use react signals. => helps a great deal in performance

    const expenseCategories = [
        { name: "Housing" },
        { name: "Transportation" },
        { name: "Food" },
        { name: "Healthcare" },
        { name: "Utilities" },
        { name: "Debt Payments" },
        { name: "Savings and Investments" },
        { name: "Entertainment" },
        { name: "Personal Care" },
        { name: "Education" },
        { name: "Charitable Contributions" },
        { name: "Taxes" },
        { name: "Other" }
    ];

    const incomeTypes = {
        cash: 'cash',
        bank: 'bank',
        bitcoin: 'bitcoin'
    }

    const [addIncomeForm, setAddIncomeForm] = useState(true)
    const [enabled, setEnabled] = useState(false)
    const [selected, setSelected] = useState(expenseCategories[0])
    const [incomeType, setIncomeType] = useState(incomeTypes.cash)
    const formik = useFormik({
        validationSchema: inputSchema,
        initialValues: {
            amount: '',
            Other: '',
        },
        onSubmit: (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            alert(values.amount)
            setAddIncomeForm(prev => !prev)
            resetForm()

        },
    });

    // useEffect(() => console.log(formik.values), [formik])

    return (
        <motion.div
            className='w-full h-[100vh] relative'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <motion.button
                key={addIncomeForm}
                // variants={}
                onClick={() => setAddIncomeForm(prev => !prev)}
                className='fixed bottom-8 left-8 p-4 font-semibold rounded-lg text-light bg-accent hover:bg-primary flex gap-3 items-center z-[11]'
            >
                <div className='scale-125 font-bold'>
                    <BsPlusCircle></BsPlusCircle>
                </div>
                Add Expense / Income
            </motion.button>
            {
                addIncomeForm && <motion.div
                    className='w-full h-[100vh] fixed bottom-0 left-0  grid place-items-center backdrop-blur-md z-10'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className='bg-secondary w-[25rem] p-4 h-auto rounded-lg flex justify-center items-center relative'>
                        <button onClick={() => {
                            setAddIncomeForm(false)
                            setEnabled(false)
                            setIncomeType(incomeTypes.cash)
                        }} className='absolute -top-8 right-0'>
                            <RxCrossCircled size={30} />
                        </button>
                        <form className='p-4' onSubmit={formik.handleSubmit}>
                            <label htmlFor="amount">Amount ₹</label>
                            <input
                                id='amount'
                                name="amount"
                                placeholder='Enter amount in ₹'
                                onChange={formik.handleChange}
                                value={formik.values.amount}
                                className='w-full p-4 rounded-sm shadow-lg mb-4 focus:outline-none'
                                type="text" />
                            <br />
                            {
                                !enabled &&
                                <>
                                    <label htmlFor="category">Add Category</label>
                                    <Listbox value={selected} onChange={setSelected}>
                                        <div className="relative mt-1 bg-background w-full p-3 shadow-md">
                                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                <span className="block truncate">{selected.name}</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronUpDownIcon
                                                        className="h-5 w-5 text-dark"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-lg font-semibold shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm bg-background z-[13]">
                                                    {expenseCategories.map((person, personIdx) => (
                                                        <Listbox.Option
                                                            key={personIdx}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 px-2 bg-background hover:bg-accent hover:text-background transition-all ease-in-out saturate-150`
                                                            }
                                                            value={person}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {person.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>
                                </>
                            }
                            <br />
                            {
                                (selected.name === 'Other' && !enabled) &&
                                (<>
                                    <label htmlFor="other"></label>
                                    <input
                                        id='other'
                                        name="other"
                                        placeholder='Speciy the Other Reason'
                                        onChange={formik.handleChange}
                                        value={formik.values.other}
                                        className='w-full p-4 rounded-sm shadow-lg mb-4 focus:outline-none'
                                        type="text" />
                                    <br />
                                </>)
                            }
                            {
                                enabled &&
                                <div className='w-full mb-3 flex justify-between'>
                                    <button onClick={() => setIncomeType(incomeTypes.cash)} style={{ background: `${incomeType === incomeTypes.cash ? '#77FF94' : '#FFF'}` }} className='p-4 bg-background rounded-md hover:-translate-y-2 transition-all ease-in-out duration-150 hover:shadow-lg'><BsCash size={30} /></button>
                                    <button onClick={() => setIncomeType(incomeTypes.bank)} style={{ background: `${incomeType === incomeTypes.bank ? '#77FF94' : '#FFF'}` }} className='p-4 bg-background rounded-md hover:-translate-y-2 transition-all ease-in-out duration-150 hover:shadow-lg'><BsBank2 size={30} /></button>
                                    <button onClick={() => setIncomeType(incomeTypes.bitcoin)} style={{ background: `${incomeType === incomeTypes.bitcoin ? '#77FF94' : '#FFF'}` }} className='p-4 bg-background rounded-md hover:-translate-y-2 transition-all ease-in-out duration-150 hover:shadow-lg'><PiCurrencyBtc size={30} /></button>
                                </div>
                            }
                            <div className='w-full flex justify-between items-center mb-4'>
                                <Switch
                                    checked={enabled}
                                    onChange={setEnabled}
                                    className={`${enabled ? 'bg-[#31C965]' : 'bg-[#fff]'}  scale-75 relative inline-flex h-[35px] w-[74px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                                >
                                    <span className="sr-only">Use setting</span>
                                    <span
                                        aria-hidden="true"
                                        className={`${enabled ? 'translate-x-10' : 'translate-x-0'} pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-primary shadow-lg transition duration-200 ease-in-out`}
                                    />
                                </Switch>
                                {
                                    enabled ?
                                        <p className='font-semibold'>Income</p>
                                        :
                                        <p className='font-semibold'>Expense</p>
                                }
                            </div>
                            <button className='text-lg text-light hover:bg-primary font-semibold p-4 w-full bg-accent' type='submit' name='submit' >Add Amount</button>
                        </form>
                    </div>
                </motion.div>
            }
            <nav className='w-full p-4 flex gap-24 items-center'>
                <h2 className='font-semibold md:text-2xl xs:text-lg'>Bucket Money Manager</h2>
            </nav>
            <BasicTabs />
        </motion.div>
    )
}

export default ExpenseTracker