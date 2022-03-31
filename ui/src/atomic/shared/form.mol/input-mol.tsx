import { H4, Label } from '../typography.atm'
import { FC, HTMLInputTypeAttribute } from 'react'
import { Input, InputWrapper } from './forms.atm'
import { UseFormRegister, FieldError } from 'react-hook-form'

export type IInputComposedOption = {
    id: string,
    value: string | number,
    title?: string
}
export interface IInputComposed {
    id: string
    name: string
    title: string
    formId?: string
    grow?: number
    fluid?: boolean
    required?: boolean
    errors?: Record<string, FieldError>
    options?: IInputComposedOption[]
    type?: HTMLInputTypeAttribute
    onChange?: (param: unknown) => Promise<boolean | void>
    register?: UseFormRegister<any>
}

export const InputComposed: FC<IInputComposed> = (props) => {
    const error = props.errors?.[props.name]
    const isTypeSelect = props.type === 'select'

    return (
        <InputWrapper key={props.id} grow={props.grow} fluid={!props.grow}>
            <Label htmlFor={props.id}>{props.title}</Label>
            <Input
                as={isTypeSelect ? props.type : undefined}
                onChange={props.onChange}
                type={props.type}
                {...props?.register?.(props.name, { required: props.required })}
            >
                {isTypeSelect && props.options?.length ? props.options?.map(option =>
                    <option
                        key={option.id}
                        value={option.value}
                    >{option.title ?? option.value}
                    </option>
                ):null}
            </Input>
            {error ? <H4 color='fail'>{error.type}</H4> : null}
        </InputWrapper>
    )
}
