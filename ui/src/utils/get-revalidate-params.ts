export const getRevalidateParams = (id: string) => {
    const revalidateMark = '&'
    const params = id.split(revalidateMark)
    const token = params[1]
    const shouldRevalidate = token === process.env.NEXT_PUBLIC_REVALIDATE_TOKEN

    return {
        id: +params[0],
        token,
        shouldRevalidate
    }
}
