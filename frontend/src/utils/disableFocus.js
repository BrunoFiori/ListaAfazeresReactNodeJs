const disableFocus = (refOrElement) => {
    const element = refOrElement.current || refOrElement;
    if (!element) return;
    Array.from(element.children).forEach((child) => {
        child.setAttribute('tabindex', '-1');
        if (child.children.length) disableFocus(child);
    })
}

export default disableFocus;