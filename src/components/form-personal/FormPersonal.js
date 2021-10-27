import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useFieldArray, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "@alef/components/button";
import FlashMessage from "@alef/components/flash-message";

import { mapCommonStates } from "@utils/store";
import { pages } from "@utils/pages";

import {
    ChildControl,
    ChildrenInputs,
    FormPersonalTitle,
    FormPersonalTitleHeader,
    StyledForm,
    StyledInput
} from "./FormPersonal.styles";

const FormPersonal = (props) => {
    const { setForm } = props;
    const [showMessage, isShowMessage] = useState(true);
    const { t } = useTranslation()
    const {
        register,
        handleSubmit,
        setError,
        control,
        formState: { errors }
    } = useForm( { mode: 'onChange'} );

    const history = useHistory();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "child",
    });

    const onSubmit = async data =>{
        try{
            delete data?.child[1];
            delete data?.child[2];
            if(data.child) data.child = data?.child.name?.map(
                (field, index) => ({ name: field.value, age: data.child.age[index].value} )
            ); else data.child = [];
            await setForm(data);
            history.replace(pages.PREVIEW);
        }catch (err){
            setError("common", { type: "common", message: err.message || err });
            isShowMessage(true);
        }
    };

    const errorAgeValidation = {
        required: t('errors.required'),
        pattern: { value: /^[0-9]+$/i, message: t('errors.numbers') },
        min:{ value: 1, message: t('errors.age_more_that_null') },
        max: { value: 99, message: t('errors.age_maximum') }
    }

    const renderErrors = (field) =>errors?.parent && errors?.parent[field]?.message;

    const removeChild = (id) =>   fields.length === 1 ? remove() : remove(id);

    const renderChildFields = fields.map((field, index) => (
            <ChildrenInputs key={index}>
                <ChildControl>
                    <StyledInput
                        key={field.id}
                        type="text"
                        label={t('label.name')}
                        error = {errors?.child?.name && errors?.child?.name[index]?.value.message}
                        {...register(`child.name.${index}.value`, { required: t('errors.required') })}
                    />
                </ChildControl>
                <ChildControl>
                    <StyledInput
                        key={field.id}
                        type="text"
                        value=""
                        label={t('label.age')}
                        error = {errors?.child?.age && errors?.child?.age[index]?.value.message}
                        {...register(`child.age.${index}.value`, errorAgeValidation)}
                    />
                </ChildControl>
                <Button onClick={() =>removeChild(index)} variant="ghost" label={t('button.remove')} />
            </ChildrenInputs>
        ));

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormPersonalTitleHeader>
                <FormPersonalTitle>{t('title.personal')}</FormPersonalTitle>
            </FormPersonalTitleHeader>
            <StyledInput
                type="text"
                value=""
                label={t('label.name')}
                error = {renderErrors('name')}
                {...register("parent.name", { required: t('errors.required')})}
            />
            <StyledInput
                type="text"
                value=""
                label={t('label.age')}
                error = {renderErrors('age', )}
                {...register("parent.age", errorAgeValidation)}
            />
            <FormPersonalTitleHeader>
                <FormPersonalTitle>{t('title.child_max')}</FormPersonalTitle>
                <Button
                    icon="Plus"
                    disabled={errors?.child|| fields.length > 4}
                    onClick={() => append({name: "children"})}
                    variant={"outlined"}
                    label={t('label.add_child')}
                    round
                />
            </FormPersonalTitleHeader>
                {renderChildFields}
            <FormPersonalTitleHeader reverse >

            <Button disabled={errors.length} type="submit" variant="primary" label={t('button.save')} round />
                {errors?.common && <FlashMessage
                    setShow={isShowMessage}
                    show={showMessage}
                    message={errors.common.message}
                    withClose
                /> }
            </FormPersonalTitleHeader>
        </StyledForm>
    );
};

FormPersonal.propTypes = {
    /** Добавление формы в store **/
    setForm: PropTypes.func,
}

export default mapCommonStates(FormPersonal);