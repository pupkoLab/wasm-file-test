async function validateInputFile(file) {

    // Check that a file was selected
    if (!file) {
        return {
            valid: false,
            message: "Please select an input file."
        };
    }

    // Check that the file is not empty
    if (file.size === 0) {
        return {
            valid: false,
            message: "The input file is empty."
        };
    }

    // Read the file as text
    const text = await file.text();

    // Check that it contains some non-whitespace content
    if (text.trim().length === 0) {
        return {
            valid: false,
            message: "The input file contains no data."
        };
    }

    return {
        valid: true,
        message: ""
    };
}
