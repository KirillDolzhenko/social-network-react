export let minLength = (lenght) => (value) => {
    if (String(value).length < (lenght - 1)) {
        return `Input must include at least ${lenght} symbols`
    } else {
        return undefined
    }
}

export let maxLength = (lenght) => (value) => {
    if (String(value).length >= (lenght - 1)) {
        return `Input can include maximum ${lenght} symbols`
    } else {
        return undefined
    }
}

export let notNone = (value) => value ? undefined : "Input can't be empty"
